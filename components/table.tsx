'use client'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";


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
  }
];



export default function table(users: any) {
  console.log('table data', users);
  return (
    <Table aria-label="Example table with dynamic content">
    <TableHeader columns={columns}>
      {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
    </TableHeader>
    <TableBody items={users.data}>
      {(item: User) => (
        <TableRow key={item.id}>
          {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>
  )
}
