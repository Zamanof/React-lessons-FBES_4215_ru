import React from 'react';
import {BreadstoreServiceConsumer} from "../breadstore-service-context";

const WithBreadstoreService = () => (Wrapped)=>{
    return (props)=>{
        return(
                <BreadstoreServiceConsumer>
                    {
                        (breadstoreService) => {
                            return (
                                <Wrapped {...props}
                                         breadstoreService={breadstoreService}
                                />
                            )
                        }
                    }
                </BreadstoreServiceConsumer>
        );
    }
};

export default WithBreadstoreService;