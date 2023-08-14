export const Footer = () => {
    return (
        <footer>
            <p>Copyright @{year}</p>
        </footer>
    )
}

const date = new Date();
const year = date.getFullYear();

export default Footer