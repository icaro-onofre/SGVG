import React, { useState } from 'react';
import './style.css';


export default function Vagas() {
    return (
      <div>
        
          <header>
          <nav>
              <div class="menu">
                  <ul>
                  <span class="material-symbols-rounded size-20">
                      menu
                  </span>
              
              <a href="#" class="logo">SGVG</a>
                
                  <li><span class="material-symbols-outlined size-20">
                      add_circle
                      </span></li>
                  <li><span class="material-symbols-rounded size-20">logout</span></li>
                  
              </ul>
              </div>
          </nav>
      </header>
      <main>
          <div class="section">
              <div class="container">
                  <h1>Status das vagas</h1>
                  <div class="setor A">
                  <div class="vaga 0">A0</div>
                  <div class="vaga 1">A1</div>
                  <div class="vaga 2">A2</div>
                  <div class="vaga 3">A3</div>
                  <div class="vaga 4">A4</div>
                  <div class="vaga 5">A5</div>
                  <div class="vaga 6">A6</div>
                  <div class="vaga 7">A7</div>
                  <div class="vaga 8">A8</div>
                  <div class="vaga 9">A9</div>
                  </div>
                  <div class="setor B">
                      <div class="vaga 0">B0</div>
                      <div class="vaga 1">B1</div>
                      <div class="vaga 2">B2</div>
                      <div class="vaga 3">B3</div>
                      <div class="vaga 4">B4</div>
                      <div class="vaga 5">B5</div>
                      <div class="vaga 6">B6</div>
                      <div class="vaga 7">B7</div>
                      <div class="vaga 8">B8</div>
                      <div class="vaga 9">B9</div>
                  </div>
                  <div class="setor C">
                      <div class="vaga 0">C0</div>
                      <div class="vaga 1">C1</div>
                      <div class="vaga 2">C2</div>
                      <div class="vaga 3">C3</div>
                      <div class="vaga 4">C4</div>
                      <div class="vaga 5">C5</div>
                      <div class="vaga 6">C6</div>
                      <div class="vaga 7">C7</div>
                      <div class="vaga 8">C8</div>
                      <div class="vaga 9">C9</div>
                  </div>
                  <div class="setor D">
                      <div class="vaga 0">D0</div>
                      <div class="vaga 1">D1</div>
                      <div class="vaga 2">D2</div>
                      <div class="vaga 3">D3</div>
                      <div class="vaga 4">D4</div>
                      <div class="vaga 5">D5</div>
                      <div class="vaga 6">D6</div>
                      <div class="vaga 7">D7</div>
                      <div class="vaga 8">D8</div>
                      <div class="vaga 9">D9</div>
                  </div>
                  <div class="setor E">
                      <div class="vaga 0">E0</div>
                      <div class="vaga 1">E1</div>
                      <div class="vaga 2">E2</div>
                      <div class="vaga 3">E3</div>
                      <div class="vaga 4">E4</div>
                      <div class="vaga 5">E5</div>
                      <div class="vaga 6">E6</div>
                      <div class="vaga 7">E7</div>
                      <div class="vaga 8">E8</div>
                      <div class="vaga 9">E9</div>
                  </div>
                  <div class="legenda">
                      <div class="livre"></div><p>Livre</p> 
                      <div class="ocupado"></div><p>Ocupado</p>
                      <div class="agendado"></div><p>Agendado</p>
                      <div class="vencimento"></div><p>Próximo do vencimento</p>
                      <div class="desativado"></div><p>Desativado</p>
                  </div>
              </div>
          
          </div>
          
      </main>
        
      </div>

    )
}
