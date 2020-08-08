import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Icon, Image } from "semantic-ui-react";
import { useInterval } from './useInterval';
import "semantic-ui-css/semantic.min.css";

function App() {
  const [payouts, setPayouts] = useState([])

  useInterval(async () => {
    console.log("Polling payouts...")
    const payouts = await axios("http://localhost:8080/api/payouts")
    setPayouts(payouts.data)
  }, 100)

  return (
    <Card.Group itemsPerRow={5}>
      {payouts.map((payout) => (
        <Card>
          <Image
            src={`/images/Artboards_Diversity_Avatars_by_Netguru-${payout.image}.png`}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{payout.MERCHANT_ID}</Card.Header>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="dollar" />
              {parseFloat(payout.amount).toFixed(2)}
            </a>
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
}

export default App;
