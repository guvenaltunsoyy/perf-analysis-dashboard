const dev = {
    BASE_API_URL: "http://localhost:8080/v1"
}

const prod = {
    BASE_API_URL: "llll"
}
const config = process.env.NODE_ENV === 'development' ? dev : prod
export default config