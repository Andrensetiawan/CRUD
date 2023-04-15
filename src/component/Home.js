import React from 'react'
import { Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faPencil,faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div> 
        <Container className='container'>
        <h1 className='mt-4'>Data siswa</h1>
        <figure>
            <figcaption className='blockquote-footer mt-2'>CRUD
            <cite title='Source Title'> Create Read Update Delete</cite>
            </figcaption>
        </figure>
        
        <li  className='btn btn-primary '>
            <FontAwesomeIcon icon={faPlus}  />
            <Link to={"/tambahdata"} className='text-light'>
            Tambah Data
            </Link>
            </li>
        <div className='table-responsive  mt-4'>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>NIM</th>
                    <th>Nama Siswa</th>
                    <th>Jenis Kelamin</th>
                    <th>Foto Siswa</th>
                    <th>Alamat</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>123456</td>
                    <td>Agus Salam Nur</td>
                    <td>Laki-laki</td>
                    <td>img1.png</td>
                    <td>Ciputat</td>
                    <td>
                        <Button className='btn btn-success btn-sm me-3 '>
                        <FontAwesomeIcon icon={faPencil}/>
                        </Button>
                        <Button className='btn btn-danger btn-sm'>
                        <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>123457</td>
                    <td>Andre Nur Setiawan</td>
                    <td>Laki-laki</td>
                    <td>img2.png</td>
                    <td>Brebes</td>
                    <td>
                    <Button className='btn btn-success btn-sm me-3 '>
                    <FontAwesomeIcon icon={faPencil}/>
                    </Button>
                        <Button className='btn btn-danger btn-sm'>
                            <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>123458</td>
                    <td>Asep Arifin</td>
                    <td>Laki-laki</td>
                    <td>img3.png</td>
                    <td>Bintaro</td>
                    <td>
                        <Button className='btn btn-success btn-sm me-3 '>
                            <FontAwesomeIcon icon={faPencil}/>
                            </Button>
                        <Button className='btn btn-danger btn-sm'>
                            <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                    </td>
                </tr>
                
                <tr>
                    <td>4</td>
                    <td>123459</td>
                    <td>Anisa Tri Lestari</td>
                    <td>Perempuan</td>
                    <td>img4.png</td>
                    <td>Cilandak</td>
                    <td>
                        <Button className='btn btn-success btn-sm me-3 '>
                        <FontAwesomeIcon icon={faPencil}/>
                        </Button>
                        <Button className='btn btn-danger btn-sm'>
                            <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                    </td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>123460</td>
                    <td>Ririn Puspitasari</td>
                    <td>Perempuan</td>
                    <td>img5.pmg</td>
                    <td>Jakarta</td>
                    <td>
                        <Button className='btn btn-success btn-sm me-3 '>
                            <FontAwesomeIcon icon={faPencil}/>
                        </Button>
                        <Button className='btn btn-danger btn-sm'>
                            <FontAwesomeIcon icon={faTrash}/>
                        </Button>
                    </td>
                </tr>
                
                
             </tbody>
        </Table>
        </div>

    </Container>

    </div>
  )
}
