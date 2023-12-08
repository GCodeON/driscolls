export default function Page({ params }: { params: { id: string }}) {
    return <h1>Hello, User {params.id}!</h1>
  }