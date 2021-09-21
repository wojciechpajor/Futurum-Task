import React from 'react';
import './campaignStyle.css';
import firebase from "../../firebase";
import { useEffect, useState } from "react";
import AddCampaign from './addCampaign';

const Campaign = (product) => {

    const { name, Path } = product.props;
    const [campaigns, setCampaigns] = useState([]);

    useEffect(() => {
        firebase.firestore().collection(Path).onSnapshot(snapshot => (
            setCampaigns(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])

    console.log(Path);

    return(
        <div className="campaignsStyle">
            {campaigns.map(campaign => (
                <div className="campaignStyle">
                    <li className="liStyle" >Name: {campaign.name}</li>
                    <li className="liStyle">Keywords: {campaign.keywords}</li>
                    <li className="liStyle">Bid amount: {campaign.bidAmount}</li>
                    <li className="liStyle">Campaign fund: {campaign.fund}</li>
                    <li className="liStyle">Status: {campaign.status}</li>
                    <li className="liStyle">Town: {campaign.town}</li>
                    <li className="liStyle">Radius{campaign.radius}</li>
                    <div>
                        <button>EDIT</button>
                        <button>DELETE</button>
                    </div>
                </div>
            ))
            }


        </div>
    )
}

export default Campaign;