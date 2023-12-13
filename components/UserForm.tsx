'use client'
import React, { useEffect, useState } from "react";

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import axios from 'axios';
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

import { FaEdit } from "react-icons/fa";
import { FaUserPlus, FaCircleCheck } from "react-icons/fa6";

interface FormData {
  name: string,
  email: string
}

export default function UserForm(props: any) {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState();
  let submitUrl = '/api/users/';

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('name is required.'),
    email: Yup.string().required('Email is required.').email('Email is invalid')
  });

  const formOptions = { resolver: yupResolver(validationSchema) };
  const { 
    register, 
    control,
    handleSubmit, 
    setValue,
    reset, 
    formState } = useForm<FormData>(formOptions);

  const { errors } = formState;

  let existingData: FormData = {
    name: '',
    email: '',
  };

  useEffect(() => {

    if(props.id) {
      submitUrl = '/api/users/' + props.id;

      axios.get(submitUrl)
      .then(res => {
        console.log('client user id', res);
        existingData = res.data;
        Object.keys(existingData).forEach((key) => {
          setValue(key as keyof FormData, existingData[key as keyof FormData]);
        });
        
      })
      .catch((error) => {
        console.log(error);
      });
    }
  }, [setValue]);


  const onSubmit = (data: FormData) => {
    console.log('on submit', data);
    axios.post(submitUrl, data)
    .then((res: any) => {
      console.log('form response', res)
      if(res) {
        setMessage('Successful Submission');
      }
    })
    .catch((error: any) => {
      console.log(error);
    });
  }

 
  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 items-center">
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <Input {...field} label={props.translations.name} />
            <span>{errors.name?.message}</span>
          </>
        )}
      />

      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <Input type="email" {...field} label={props.translations.email} />
            <span>{errors.email?.message}</span>
          </>
        )}
      />

      <Button type="submit" className='my-8 px-5 py-2 bg-green-500 text-white text-sm font-bold tracking-wide rounded-full'>{props.id ? <FaEdit/> : <FaUserPlus/>}</Button>
      {message && (
        <div id="form-message">
          {props.translations.success}
        </div>
      )}
    </form>
  );
}