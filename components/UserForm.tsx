'use client'
import React, { useEffect, useState } from "react";

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import "yup-phone-lite";

import axios from 'axios';
import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";

interface FormData {
  name: string,
  email: string
}

export default function UserForm(id?: any) {
  const [message, setMessage] = useState('');
  const [user, setUser] = useState();

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
    console.log('id passed', id.id);
      axios.get('/api/users/' + id.id)
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
  }, [setValue]);


  const onSubmit = (data: FormData) => {
    console.log('on submit', data);
    axios.post('/api/users/' + id.id, data)
    .then((res: any) => {
      console.log('form response', res)
      if(res) {
        setMessage('Successful Submission');
        // reset();
        // getList();
      }
    })
    .catch((error: any) => {
      console.log(error);
    });
  }

 
  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-6/12 gap-2 items-center">
      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ field }) => (
          <>
            <Input {...field} label="Name" />
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
            <Input type="email" {...field} label="Email" />
            <span>{errors.email?.message}</span>
          </>
        )}
      />

      <Button type="submit" color="primary">{id ? 'Update' : 'Submit' }</Button>
      {message && (
        <div id="form-message">
          <h3>{message}</h3>
        </div>
      )}
    </form>
  );
}