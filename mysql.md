# MySQL

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
**Structure**
```SQL
SELECT DISTINCT column_name FROM table_name;
```
**Example**
```SQL
SELECT DISTINCT Country FROM Customers;
```
