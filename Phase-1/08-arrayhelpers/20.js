const users = [
    { name: 'omer', role: 'admin' },
    { name: 'zayd', role: 'manager' },
    { name: 'taha', role: 'user' }

]

const hasadmin = users.some((usr) =>
    usr.role == 'editor'
)

console.log(hasadmin);