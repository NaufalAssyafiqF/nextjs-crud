import { BackButton } from "@/components/button";
import CreateForm from "@/components/createForm";
import React from "react";

const CreateContactPage = () => {
  return (
    <div className="max-w-medium mx-auto mt-5">
      <BackButton />
      <h1 className="text-2xl text-center mb-2">Add New Contact</h1>
      <CreateForm />
    </div>
  );
};

export default CreateContactPage;
