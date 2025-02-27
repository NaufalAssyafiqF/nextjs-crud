"use client";

import { updateContact } from "@/lib/action";
import { useFormState } from "react-dom";
import { SubmitButton } from "./button";
import type { contact } from "@prisma/client";
const UpdateForm = ({contact}:{contact:contact}) => {
    const UpdateContactWithId = updateContact.bind(null, contact.id)
  const [state, formAction] = useFormState(UpdateContactWithId, null);

  return (
    <div className="max-w-md mx-auto">
      <form action={formAction}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gary-900"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your name"
            defaultValue={contact.name}
          />
          <div id="name-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.name}</p>
          </div>
        </div>

        <div className="mb-5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gary-900"
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter your phone number"
            defaultValue={contact.phone}
          />
          <div id="phone-error" aria-live="polite" aria-atomic="true">
            <p className="mt-2 text-sm text-red-500">{state?.Error?.phone}</p>
          </div>
        </div>

        <div id="message-error" aria-live="polite" aria-atomic="true">
          <p className="mt-2 text-sm text-red-500">{state?.message}</p>
        </div>
        <SubmitButton label="update" />
      </form>
    </div>
  );
};

export default UpdateForm;
