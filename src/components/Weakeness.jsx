import React,{useState, useEffect} from 'react'
import { getDataType } from '../js/Types';
import { WeakenessContainer } from '../styles/style-details-pokemon';
import DamageSectionComponent from './DamageSectionComponent';
const Weakeness = ({ types }) => {

    const [data, setData] = useState({super_effective:[], effective: [], non_effective:[],inmune:[]})

    useEffect(() => {
        const result = getDataType(types.map(res => res.type.name))
        result.from.sort((a, b) => {
            const p1 = a[1]
            const p2 = b[1]
            if (p1<p2){
                return 1
            }
            if(p1>p2){
                return -1
            }
            return 0
        })
        const super_effective = result.from.filter((data) => data[1]>=4)
        const effective = result.from.filter((data) => data[1]==2)
        const non_effective = result.from.filter((data) => data[1]<1 && data[1] != 0)
        const inmune = result.from.filter((data) => data[1]==0)
        setData({super_effective, effective, non_effective, inmune})
    }, [])
    
  return (
   
    <WeakenessContainer>
        <h2>Resistances</h2>
        <DamageSectionComponent data = { data.super_effective } label = "Super Effective From: "/>
        <DamageSectionComponent data = { data.effective } label = "Effective From: "/>
        <DamageSectionComponent data = { data.non_effective } label = "Non Effective From: "/>
        <DamageSectionComponent data = { data.inmune } label = "Inmune From: "/>
        
    </WeakenessContainer>
  )
}

export default Weakeness