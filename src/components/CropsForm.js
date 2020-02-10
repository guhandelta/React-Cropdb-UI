import React, { useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";

export const CropsForm = ({ onNewCrop }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1);
  return (
    <Form>
      <Form.Field>
        <Input
          placeholder="Crop Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="Crop Price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Button
          onClick={async () => {
            const crop = { name, price };
            const response = await fetch("/add_crop", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify(crop)
            });
            if (response.ok) {
              console.log("response works!!!");
              onNewCrop(crop);
              setName("");
              setPrice(1);
            }
          }}
        >
          Add Crop
        </Button>
      </Form.Field>
    </Form>
  );
};
