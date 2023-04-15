import { Product } from "@/interfaces/product";
import { AiFillTag, AiFillStar } from 'react-icons/ai'

export interface ProductDescriptionProps {
  data: Product;
}

export default function ProductDescription({data}: ProductDescriptionProps) {
  return (
    <div className="flex flex-col gap-5 justify-between h-full">
      <div className="w-full flex gap-5 justify-between">
        <div>
          <h2 className="text-xl">{data.title} - {data.brand}</h2>
          <div className="text-sm">{data.description}</div>
        </div>
        <div>
          <div className="text-xl">${data.price}</div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="p-2 rounded bg-gray-300 flex gap-1 items-center"><AiFillTag /> {data.category}</div>
        <div className="flex gap-1 items-center"><AiFillStar className="text-yellow-500" /> {data.rating}</div>
      </div>
    </div>
  )
}
