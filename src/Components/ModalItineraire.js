import { View, Text, Modal, Button, VStack } from "native-base";
import React from "react";
import { useEffect } from "react";

const ModalItineraire = () => {
  return (
    <>
      <Modal
        isOpen={true}
        avoidKeyboard
        onClose={false}
        justifyContent="flex-end"
        bottom="-6"
        size="full"
        roundedBottomRight={-10}
      >
        <Modal.Content>
          <Modal.Header> </Modal.Header>
          <Modal.Body>
            <Button flex="1">Voir l'itinéraire</Button>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default ModalItineraire;
