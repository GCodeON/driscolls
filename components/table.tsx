'use client'
import React from "react";
import Link from 'next/link'

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

export default function UsersTable(users: any) {
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
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="list of users table">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={users.data}>
        {(item: User) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
