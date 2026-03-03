package com.cajaahorro.familiar.domain.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.math.BigDecimal;
import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Socio {
    private Long id;
    private Long userId;
    private String nombre;
    private String cedula;
    private LocalDate fechaIngreso;
    private BigDecimal saldoTotal;
}
