const tech = 'React and Vite'
const theme = {
    primary: 'red',
    secondary: 'blue'
}
export function App (){
    return <h1 style={{background:theme.primary, color: 'white'}} className='font-mono text-4xl'>Hello from {tech}!!</h1>
}