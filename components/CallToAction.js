import Container from "./Container"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

const CallToAction = () => {
    return <section className={styles.calltoaction}>
        <Container>
            <Heading level={2}> Get Behind the Wheel
            <Paragraph color='white'>
                Start customizing your Crosstrek Today. 
            </Paragraph>
            </Heading>
        </Container>

    </section>
}
export default CallToAction