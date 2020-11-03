import React from "react";
import { Button, Modal, Form  } from 'semantic-ui-react';


const App = ({ open, setOpen, data }) => {
    
    const close = () => {
        setOpen(false);
    }

    if (data){
    return (
        <Modal  open={open} onClose={close}>
            <Modal.Header>{data.business_name}</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Group>
                            <Form.Input
                                width={8}
                                label='Location'
                                value={data.city+','+data.province}
                            />
                            <Form.Input
                                width={8}
                                label='Phone Number'
                                value='1234567890'
                            />
                        </Form.Group>
                        <Form.Group>
                                <Form.Dropdown
                                    width={8}  
                                    label='Product Catalog'
                                    options={[1,2,3]}
                                />
                                <Form.Input
                                width={8}
                                label='Last Delivery'
                                value={data.customer_info.last_delivery_date}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input
                                width={8}
                                label='Average Orders'
                                value={data.customer_info.buyer_average_order}
                            />
                            <Form.Input
                                width={8}
                                label='Current Month Order'
                                value={data.customer_info.orders_this_month}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input
                                width={8}
                                label='Current MOnth Sales'
                                value='5000'
                            />
                            <Form.Input
                                width={8}
                                label='Total sales'
                                value='15000'
                            />
                        </Form.Group>

                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={close}>
                    close
                </Button>
            </Modal.Actions>
        </Modal>
    )} else{
        return null;
    }
}
export default App;


