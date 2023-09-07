"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { FormEventHandler, useState } from "react";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { addUser } from "@/api";

const AddUser = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [formError, setFormError] = useState<boolean>(false);

  const handleSubmitNewTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    const response = await addUser({
      email: emailValue,
      password: passwordValue,
    });
    console.log(response);
    if (response === 200) {
      setEmailValue("");
      setPasswordValue("");
      setModalOpen(false);
      router.refresh();
      setFormError(true);
    } else {
      setFormError(true);
    }
    
    
  };

  const closeModal = () => {
    setModalOpen(false);
    setFormError(false);
  }

  const openModal = () => {
    console.log("true");
    setModalOpen(true);
  };
  
  return (
    <div>
      <button
        onClick={openModal}
        className='btn btn-primary w-full'
      >
        Add new user <AiOutlinePlus className='ml-2' size={18} />
      </button>

      <Modal modalOpen={modalOpen} closeModal={closeModal}>
      <div className={`alert ${formError ? "alert-error" : "hidden"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error! register user.</span>
      </div>
        <form onSubmit={handleSubmitNewTodo}>
          <h3 className='font-bold text-lg'>Add new user</h3>
          <div className="form-control h-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              type="text" 
              placeholder="Type here" 
              className="input input-bordered w-full" 
            />
          </div>
          <div className="form-control h-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)} 
              type="password" 
              placeholder="Type here" 
              className="input input-bordered w-full" />
          </div>
          <div className='modal-action'>
            <button type='submit' className='btn'>
              Submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default AddUser