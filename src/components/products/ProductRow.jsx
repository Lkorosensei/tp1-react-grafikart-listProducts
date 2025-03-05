/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export function ProductRow ({product}) {

    const style = product.stocked ? undefined : {color : 'red'}

    return <tr>
        <td style={style}> {product.name} </td>
        <td> {product.price} </td>
    </tr>
}