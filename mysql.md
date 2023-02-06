# MySQL - Basic Commands

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
