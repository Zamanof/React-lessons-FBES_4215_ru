import React from "react";

const {
    Provider: BreadstoreServiceProvider,
    Consumer: BreadstoreServiceConsumer
} = React.createContext()

export {
    BreadstoreServiceProvider,
    BreadstoreServiceConsumer
}