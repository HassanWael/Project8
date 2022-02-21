import React from 'react'
import './Profile.css'
import { faker } from'@faker-js/faker';
function Profile() {
  return (
    <main className='profile'>
        <section className='profile__info'>
            <img src={faker.image.avatar()} alt="" />
            <h3>Name</h3>
            <h6>phone number</h6>
            <h6>email</h6>
            
        </section>
        <section className='profile_reservation'>



        <table class="container__table">
	<thead>
		<tr>
			<th><h1>Sites</h1></th>
			<th><h1>Views</h1></th>
			<th><h1>Clicks</h1></th>
			<th><h1>Average</h1></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Google</td>
			<td>9518</td>
			<td>6369</td>
			<td>01:32:50</td>
		</tr>
		<tr>
			<td>Twitter</td>
			<td>7326</td>
			<td>10437</td>
			<td>00:51:22</td>
		</tr>
		<tr>
			<td>Amazon</td>
			<td>4162</td>
			<td>5327</td>
			<td>00:24:34</td>
		</tr>
    <tr>
			<td>LinkedIn</td>
			<td>3654</td>
			<td>2961</td>
			<td>00:12:10</td>
		</tr>
    <tr>
			<td>CodePen</td>
			<td>2002</td>
			<td>4135</td>
			<td>00:46:19</td>
		</tr>
    <tr>
			<td>GitHub</td>
			<td>4623</td>
			<td>3486</td>
			<td>00:31:52</td>
		</tr>
	</tbody>
</table>




        </section>

    </main>
  )
}

export default Profile