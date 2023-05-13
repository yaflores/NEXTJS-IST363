import styles from './paragraph.module.scss';
import classnames from 'classnames/bind';

let cx = classnames.bind(styles);

const Paragraph = ({
    children,
    color='black'
}) => {
    let paragraphClasses = cx ({
        paragraph: true,
        [`color-${color}`] : color
    });
    return <p className={styles.paragraph}>{children}</p>
}
export default Paragraph;