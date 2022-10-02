
select * from item where weight = (select min(weight) from item);

select * from warehouse where cityId =( select id from city where city= 'pune');

select i.* from item i inner join item_order i_o on i_o.itemId = i.id inner join orders o on o.id=i_o.orderId inner join customer c on c.id=o.customerId where c.cname='Mr. Patil';

select * from warehouse where id = (select warehouseid from store group by warehouseid having count(id) =( select max(storeCount) from (select count(id)storeCount from store group by warehouseid) as foo));

select * from item where id in(select itemid from item_order group by itemid having count(id) = (select min(itemCount) from (select count(id) as itemCount from item_order group by itemid)as itemCount));

select c.*,i.*,io.quantity,o.order_date from item_order io inner join orders o on o.id=io.orderid inner join customer c on c.id=o.customerid inner join item i on i.id=io.itemid;