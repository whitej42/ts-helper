import './Accordian.css';
import AccordianItem from "./AccordianItem";
import { useLocos } from "../../../hooks/useLocos";

function Accordian() {
    const { locos, loading, error } = useLocos();

    if (loading) return <div className="accordion">Loading…</div>;
    if (error)   return <div className="accordion">Error: {error}</div>;

    return (
        <div className="accordion">
            <div className="accordian-search">
                <input type="text" id="search" name="search" placeholder="Search"/>
            </div>
            {locos.map((loco) => (
                <AccordianItem key={loco['key']} loco={loco} />
            ))}
        </div>
    )
}

export default Accordian