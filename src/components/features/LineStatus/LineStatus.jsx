import { useState, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import './LineStatus.css';
import overgroundRoundel from '../../../assets/images/overground_roundel.svg';

const OVERGROUND_SLUGS = new Set(['lioness', 'liberty', 'mildmay', 'suffragette', 'weaver', 'windrush']);

function LineStatus({ lineName, statusSeverity, statusUpdate }) {

    // Set css classes
    const slug = lineName.toLowerCase().split(' & ').join(' ').split(' ').join('-');
    const nameClasses = `line-name ${slug}`;
    const isOverground = OVERGROUND_SLUGS.has(slug);
    const statusClasses = `line-status ${statusSeverity.toLowerCase().split(' ').join('-')}`;

    // Toggle show updates button
    const [toggleUpdates, setToggleUpdates] = useState(false);

    // Show toggle status update button
    const [showUpdate, setShowUpdate] = useState(false);

    useEffect(
        function getUpdates() {
            if (statusSeverity !== 'Good Service') {
                setShowUpdate(true)
            }
        }, [statusSeverity]
    );

    const [updateLink, setUpdateLink] = useState(false);

    // if service update contains link 
    useEffect(
        function getUpdates() {
            if (statusUpdate.includes("http")) {
                setUpdateLink(true)
            }
        }, [statusUpdate]
    )

    return (
        <>
            <div className='status'>
                <div className={nameClasses}>
                    <label>{lineName}</label>
                    {isOverground && (
                        <img src={overgroundRoundel} alt="" aria-hidden="true" style={{ width: '18px', height: '18px', display: 'inline-block', marginLeft: '6px', verticalAlign: 'middle' }} />
                    )}
                </div>
                <div className={statusClasses}>
                    <label>{statusSeverity}</label>
                    {showUpdate &&
                        <div className="btn" onClick={() => setToggleUpdates(!toggleUpdates)}>{toggleUpdates ? <FaChevronUp /> : <FaChevronDown />}</div>
                    }
                </div>
            </div>
            {toggleUpdates && (
                <div className="update">
                    {updateLink ?
                        <a href={statusUpdate} target="0">{statusUpdate}</a>
                        :
                        <label>{statusUpdate}</label>
                    }
                </div>
            )}
        </>
    )
}

export default LineStatus
