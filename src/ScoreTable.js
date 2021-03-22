import React from 'react';

const ScoreTable = (props) => {
    console.log(props);
    const {country} = props;
    return (
        <div>
            <h2>High scores: {country.name}</h2>
            <table class="table">
                
                <tbody>
                    {country.scores.map(score => {
                        return (<tr><td>{score.n}</td>
                            <td>{score.s}</td>
                        </tr>)
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
};
export default ScoreTable;