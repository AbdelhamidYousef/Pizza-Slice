# Static UI

# Routes

_Tech_: React Router.
_Routes_:

- '/' => Root = header + _outlet_ + footer.
- _outlet_
  - index => Home
  - 'menu' => Menu
  - 'cart' => Cart
  - 'order/new' => NewOrder
  - 'order/:id' => Order

# Components

_Techs_: Tailwind
_pages_: Home - Menu - NewOrder - Order

# Data Flow & State Management

## Local Remote States

_Tech_: React Router.
_Routes_:

- 'menu' => loader (to GET menu data from API)
- 'order/new' => action (to POST the new order to API)
- 'order/:id' => action (to EDIT order priority in API)

## Global UI States

_Techs_: RTK
_Global UI States_: username - cart data
