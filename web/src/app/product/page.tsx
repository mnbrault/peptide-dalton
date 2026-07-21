import type { Metadata } from "next";
import { ProductPurchase } from "@/components/product/ProductPurchase";
import { PRODUCT } from "@/lib/constants";

export const metadata: Metadata = {
  title: PRODUCT.name,
  description: PRODUCT.description,
};

type Props = {
  searchParams: Promise<{ mode?: string }>;
};

export default async function ProductPage({ searchParams }: Props) {
  const params = await searchParams;
  const initialMode =
    params.mode === "subscribe" ? "subscribe" : "onetime";

  return <ProductPurchase initialMode={initialMode} />;
}
