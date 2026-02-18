package com.main;

import org.hibernate.Session;
import org.hibernate.Transaction;
import com.entity.Product;
import com.util.HibernateUtil;

public class InsertProduct {

    public static void main(String[] args) {

        Session session = HibernateUtil.getSessionFactory().openSession();
        Transaction tx = session.beginTransaction();

        Product p1 = new Product("Laptop", "Dell", 55000, 10);
        Product p2 = new Product("Mobile", "Samsung", 25000, 20);

        session.save(p1);
        session.save(p2);

        tx.commit();
        session.close();

        System.out.println("Products Inserted");
    }
}
