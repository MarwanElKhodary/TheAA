package com.example.theaa.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.theaa.entity.Fault;

@Repository
public interface FaultRepository extends JpaRepository<Fault, Long> {

}
