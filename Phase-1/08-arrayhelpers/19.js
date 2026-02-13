const roles = ['admin', 'customer', 'manager']

const userrole = 'editor'
const userrole2 = 'admin'

if (roles.includes(userrole2)) {
    console.log('access granted');
} else {
    console.log('failed to auth');
}