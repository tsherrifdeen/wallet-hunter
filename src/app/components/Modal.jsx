"use client";

import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

const ModalDiv = () => {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState("");

  function onCloseModal() {
    setOpenModal(false);
    setEmail("");
  }

  return (
    <>
      <Button className="mt-4" onClick={() => setOpenModal(true)}>
        Toggle modal
      </Button>
      <Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Enter License Key
            </h3>
            <div>
              <div className="block mb-2">
                <Label htmlFor="email" value="Your email" />
              </div>
              <TextInput
                id="email"
                placeholder="name@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div>
              <div className="block mb-2">
                <Label htmlFor="large" value="License Key" />
              </div>
              <TextInput id="large" type="text" sizing="lg" />
            </div>
            <div className="w-full">
              <Button>Submit</Button>
            </div>
            <div className="flex justify-between text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?&nbsp;
              <a
                href="#"
                className="text-cyan-700 hover:underline dark:text-cyan-500"
              >
                Get License Key
              </a>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalDiv;
