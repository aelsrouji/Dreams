import React from 'react';

const DreamSummary = ({ dream }) => {
    return (
        <div className="class-summary">
            <div className="card-content white grey-text text-darken-3">
                <table className="table">
                    <tr>
                        <td>
                            <span className="card-title">Title: {dream.title}</span>
                            <p className="grey-text">Content: {dream.content}</p>
                            <span className="grey-text">Date: {dream.createAt}</span>
                        </td>
                    </tr>
                </table>

            </div>
        </div>
    )
}

export default DreamSummary;