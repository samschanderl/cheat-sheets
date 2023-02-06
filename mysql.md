# MySQL - Basic Commands
Summary of basic commands.
Source: [w3schools](https://www.w3schools.com/MySQL/mysql_sql.asp)

### 1 - Get all data from a Table
**Structure**
```SQL
SELECT * FROM Customers;
```

**Example**
```SQL
SELECT * FROM products;
```

### 2 - Get specific columns data from a Table
**Structure**
```SQL
SELECT column1, column2 FROM table_name;
```
**Example**
```SQL
SELECT Name, Age, Address FROM Customers;
```

### 3 - Get disctinct values from columns data from a Table
- only return unique values (no repeating values)
**Structure**
```SQL
SELECT DISTINCT column_name FROM table_name;
```
**Example**
```SQL
SELECT DISTINCT Country FROM Customers;
```

### 4 - Get number of distinct values from columns data from a Table
- counts the number of unique values (no repeating values)
**Structure**
```SQL
SELECT COUNT(DISTINCT column_name) FROM table_name;
```
**Example**
```SQL
SELECT COUNT(DISTINCT Country) FROM Customers;
```

### 5 - Get specific columns data from a Table where a condition is true
- the `WHERE` clause is also used in `UPDATE`, `DELETE`, etc
**Structure**
```SQL
SELECT column1, column2 FROM table_name WHERE condition;
```
**Example**
```SQL
SELECT * FROM Customers WHERE Country= 'MExico';
SELECT name, address FROM Customers WHERE age >= 30;
```

### 6 - Get specific columns data from a Table where two conditions are true with `AND`
**Structure**
```SQL
SELECT column1, column2 FROM table_name WHERE condition1 AND condition2;
```
**Example**
```SQL
SELECT name, address FROM Customers WHERE age >= 30 AND customer_status = 'VIP';
```

### 7 - Get specific columns data from a Table where one of two conditions is true with `OR`
**Structure**
```SQL
SELECT column1, column2 FROM table_name WHERE condition1 OR condition2;
```
**Example**
```SQL
SELECT name, address FROM Customers WHERE age >= 30 OR customer_status = 'VIP';
```

### 8 - Get specific columns data from a Table where one condition is false `WHERE NOT`
**Structure**
```SQL
SELECT column1, column2 FROM table_name WHERE condition1 OR condition2;
```
**Example**
```SQL
SELECT name, address FROM Customers WHERE NOT age >= 30;
```

### 9 - Get data and order it ascending or descending with `ORDER BY`
- orders in ascending order by default
- you can order by several columns. Orders first by first column, then by second

**Structure**
```SQL
SELECT * FROM table_name ORDER BY column_name;
```
**Example**
```SQL
SELECT * FROM Customers ORDER BY NumberOfPurchases ASC|DESC;
SELECT * FROM Customers ORDER BY Country, CustomerName;
```
