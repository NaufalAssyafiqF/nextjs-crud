import { CreateButton } from "@/components/button";
import ContactTable from "@/components/contactTable";
import Search from "@/components/search";
import React from "react";

const Contact = ({
  searchParams,
}: {
  searchParams?: { query?: string; page?: string };
}) => {

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <div className="flex items-center justify-between gap-1 mb-5">
        <Search />
        <CreateButton />
      </div>
      <ContactTable query={query} currentPage={currentPage}/>
    </div>
  );
};

export default Contact;
