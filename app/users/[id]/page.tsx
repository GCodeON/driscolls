export default function Page({ params }: { params: { id: string }}) {
    return (
      <div>
        <h1>Hello, User {params.id}!</h1>
      </div>
    )
  }