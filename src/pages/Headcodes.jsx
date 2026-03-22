import { Helmet } from 'react-helmet-async';
import HeadcodeGenerator from "../components/features/HeadcodeGenerator/HeadcodeGenerator";

function Headcodes() {
    return (
        <>
            <Helmet>
                <title>Headcode Generator | TSCHelper</title>
                <meta name="description" content="Generate authentic UK rail headcodes for your Train Simulator Classic scenarios. Get the format right without the guesswork." />
                <link rel="canonical" href="https://tscscenario.co.uk//headcodes" />
            </Helmet>
            <HeadcodeGenerator />
        </>
    );
}

export default Headcodes;
