import React from 'react';
import DreamSummary from './DreamSummary';
import { Link } from 'react-router-dom'

const DreamList = ({ dreams }) => {
    return (
        <div className="dream-list section">
            {dreams && dreams.map(dream => {
                return (
                    <Link to={"/dream/" + dream.id}>
                        <DreamSummary dream={dream} key={dream.id} />
                    </Link>
                )
            })
            }
        </div>
    )
}

export default DreamList;