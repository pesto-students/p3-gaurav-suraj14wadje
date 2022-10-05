create table city(
    id SERIAL primary key,
    city varchar(20),
    state char(20)
);

create table warehouse(
    id SERIAL primary key,
    wname varchar(30),
    cityId int references city(id),
    extra_context json
);

create table store(
    id SERIAL primary key,
    store_name varchar(20),
    location varchar(20),
    warehouseId int references warehouse(id)
);

create table customer(
    id SERIAL primary key,
    cname varchar(30),
    addr varchar(50),
    cu_city varchar(20)
);

create table orders(
    id SERIAL primary key,
    order_date date,
    customerId int references customer(id)
);

create table item(
    id SERIAL primary key,
    description text,
    weight decimal(5,2),
    cost decimal(5,2)
);

create table item_order(
    id SERIAL primary key,
    quantity int,
    itemId int references item(id),
    orderId int references orders(id)
);

create table item_store(
    id SERIAL primary key,
    quantity int,
    storeId int references store(id),
    itemId int references item(id)
)