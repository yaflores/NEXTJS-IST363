import styles from './swatch.module.scss';

const Swatch = ({color }) => {
    const {name, hex } = color;
    return <li>{name}</li>
}
export default Swatch;