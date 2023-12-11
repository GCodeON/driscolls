'use client'
import React, { useEffect, useState } from "react";
import Link from 'next/link'
import axios from 'axios';
import {
  Table, 
  TableHeader, 
  TableColumn, 
  TableBody, 
  TableRow, 
  TableCell, 
  Tooltip 
} from "@nextui-org/react";

import {EditIcon} from "@/public/edit";
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
  
  useEffect(() => {
    console.log('users');
      axios.get('/api/users')
      .then(res => {
        console.log('users', res)
        setUsers(res.data);        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function onDelete(user: User) {
    console.log('on delete', user);
    axios.delete('/api/users/' + user.id)
      .then(res => {
        console.log('delete', res)
        setUsers(res.data);        
      })
      .catch((error) => {
        console.log(error);
      });
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
            {/* <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon />
              </span>
            </Tooltip> */}
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
    <>
      {users && (
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
      )}
    </>
  )
}
