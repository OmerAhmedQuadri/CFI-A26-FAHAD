export const middlewareserver = (req, res, next) => {
    console.log('hello');
    next()
}