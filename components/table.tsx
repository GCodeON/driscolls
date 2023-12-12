'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import axios from 'axios';
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip,
  Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure,
  Button
} from "@nextui-org/react";

import UserForm from '@/components/UserForm';

import {DeleteIcon} from "@/public/delete";
import {EyeIcon} from "@/public/eye";

type User = {
  email: string,
  name: string,
  id: string
}

const columns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "email",
    label: "EMAIL",
  },
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "actions",
    label: "ACTIONS",
  }
];

export default function UsersTable() {
  const [users, setUsers] = useState();
  const {isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios.get('/api/users/')
    .then(res => {
      setUsers(res.data);        
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function onDelete(user: User) {
    axios.delete('/api/users/' + user.id)
    .then(res => {
      setUsers(res.data);        
    })
    .catch((error) => {
      console.log(error);
    });
  }

  function modalClose() {
    getUsers();
  }

  const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];
  
    switch (columnKey) {
      case "id":
        return (
          <p>{user.id}</p>
        );
      case "email":
        return (
          <p>{user.email}</p>
        );
      case "name":
        return (
          <p>{user.name}</p>
      );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Details">
              <Link href={`/users/${user.id}`}>
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Link>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => {
                  onDelete(user);
                }} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="flex items-center ">
      {users && (
        <>
          <Table aria-label="list of users table">
            <TableHeader columns={columns}>
              {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
            </TableHeader>
            <TableBody items={users}>
              {(item: User) => (
                <TableRow key={item.id}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
          <div className='fixed bottom-0 w-full text-center'>
            <Button className='my-8 px-5 py-2 bg-green-500 text-white text-xl font-bold tracking-wide rounded-full' onPress={onOpen}>Add User</Button>
          </div>
          
          <Modal 
            isOpen={isOpen} 
            onOpenChange={onOpenChange}
            placement="top-center"
            onClose={modalClose}
          >
            <ModalContent>
              <ModalHeader className="flex flex-col gap-1 text-center">New User</ModalHeader>
              <ModalBody>
                <UserForm/>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  )
}
