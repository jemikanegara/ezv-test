import Layout from "@/components/Layout";
import ProductDescription from "@/components/ProductDescription";
import { ProductListResponse } from "@/interfaces/product"
import Image from "next/image";
import Link from "next/link";

export interface ProductListProps {
  data: ProductListResponse;
}

export default function ProductList({ data }: ProductListProps) {
  return (
    <Layout>
      <main className="max-w-3xl mx-auto w-full space-y-5 py-5 px-2">
        {data.products.map((p) => {
          return (
            <div key={p.id}>
              <Link href={`/${p.id}`}>
                <div className="flex gap-5 mb-5 hover:bg-gray-300 rounded-lg p-5 flex-wrap sm:flex-nowrap">
                  <div className="h-48 w-full sm:w-60">
                    <div className="h-48 w-full sm:w-60 relative bg-cover" style={{ backgroundImage: `url(${p.thumbnail})`}} />
                  </div>
                  <div className="flex-grow">
                    <ProductDescription data={p} />
                  </div>
                </div>
              </Link>
              <div className="mb-5 border-b-2 border-b-gray-400"></div>
            </div>
          )
        })}
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const data = await fetch('https://dummyjson.com/products').then((res) => res.json()) as ProductListResponse
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
