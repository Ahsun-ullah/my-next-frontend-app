import { useRouter } from "next/router";
import React from "react";

const CategoriesDetails = () => {
  const router = useRouter();
  return (
    <div>
      <h1>This is category {router.query.categoryId}</h1>
    </div>
  );
};

export default CategoriesDetails;
