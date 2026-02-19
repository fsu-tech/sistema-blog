import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para *ngFor
import { FormsModule } from '@angular/forms';   // Para ngModel

interface Noticia {
  titulo: string;
  imagen: string;
  texto: string;
  fecha: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, FormsModule], // <-- módulos necesarios
  templateUrl: './blog.html',
  styleUrls: ['./blog.css'] // <-- cuidado, debe ser styleUrls
})
export class BlogComponent {

  noticias: Noticia[] = [
    {
      titulo: 'Primera Noticia',
      imagen: 'https://picsum.photos/600/300',
      texto: 'Esta es la primera noticia de ejemplo.',
      fecha: '2026-02-15'
    },
    {
      titulo: 'Segunda Noticia',
      imagen: 'https://picsum.photos/600/301',
      texto: 'Esta es la segunda noticia de ejemplo.',
      fecha: '2026-02-16'
    }
  ];
  // Método para mostrar la fecha en formato dd/mm/yyyy
  formatearFecha(fecha: string): string {
    if (!fecha) return '';
    const d = new Date(fecha);
    if (isNaN(d.getTime())) return fecha; // Si no es fecha válida, mostrar tal cual
    const dia = d.getDate().toString().padStart(2, '0');
    const mes = (d.getMonth() + 1).toString().padStart(2, '0');
    const anio = d.getFullYear();
    return `${dia}/${mes}/${anio}`;
  }

  // Objeto temporal para el formulario
  nuevaNoticia: Noticia = { titulo: '', imagen: '', texto: '', fecha: '' };

  // Método para añadir noticia al array
  agregarNoticia() {
    if (!this.nuevaNoticia.titulo || !this.nuevaNoticia.imagen || !this.nuevaNoticia.texto || !this.nuevaNoticia.fecha) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    this.noticias.push({ ...this.nuevaNoticia });
    this.nuevaNoticia = { titulo: '', imagen: '', texto: '', fecha: '' }; // Limpiar formulario
  }

}