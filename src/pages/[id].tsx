import Layout from "@/components/Layout";
import ProductDescription from "@/components/ProductDescription";
import { Product } from "@/interfaces/product"
import { GetServerSidePropsContext } from "next";
import Image from "next/image";

export interface ProductProps {
  data: Product;
}

export default function Product({ data }: ProductProps) {
  return (
    <Layout>
      <main className="max-w-3xl mx-auto w-full space-y-5 py-5 px-2">
        <img
          alt={data.title}
          title={data.title}
          src={data.thumbnail}
          className="w-full"
        />
        <ProductDescription data={data} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {data.images.filter(image => !image.includes("thumbnail")).map((src, i) => {
            const title = `${data.title}-${i + 1}`
            return (
              <div key={src} className="space-y-5">
                <img
                  alt={title}
                  title={title}
                  src={src}
                  className="h-full w-full"
                />
              </div>
            )
          })}
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.query.id

  try {
    const data = await fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json()) as Product
    return {
      props: {
        data,
      },
    }
  } catch(err) {
    return {
      props: {
        error: (err as {message: string})?.message || err
      }
    }
  }
}
